import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(
    // forçar retornar valor boleano, Boolean() ou !!
    () => !!notifications.find(not => not.read === false),
    [notifications]
  );

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        ),
      }));

      setNotifications(data);
    }
    loadNotifications();
  }, []);

  function handleToogleVisible() {
    setVisible(!visible);
  }

  async function handleMarkRead(id) {
    await api.put(`notifications/${id}`);

    setNotifications(
      notifications.map(not => (not._id === id ? { ...not, read: true } : not))
    );
  }

  return (
    <Container>
      <Badge onClick={handleToogleVisible} hasUnread={hasUnread}>
        <MdNotifications />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(not => (
            <Notification key={not._id} unread={!not.read}>
              <p>{not.content}</p>
              <time>{not.timeDistance}</time>
              {!not.read && (
                <button type="button" onClick={() => handleMarkRead(not._id)}>
                  marcar lida
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
