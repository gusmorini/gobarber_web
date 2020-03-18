import React from 'react';

import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications />
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>você possui um agendamento...</p>
            <time>há 2 dias</time>
            <button type="button">marcar lida</button>
          </Notification>
          <Notification>
            <p>você possui um agendamento...</p>
            <time>há 2 dias</time>
            <button type="button">marcar lida</button>
          </Notification>
          <Notification>
            <p>você possui um agendamento...</p>
            <time>há 2 dias</time>
            <button type="button">marcar lida</button>
          </Notification>
          <Notification unread>
            <p>você possui um agendamento...</p>
            <time>há 2 dias</time>
            <button type="button">marcar lida</button>
          </Notification>
          <Notification>
            <p>você possui um agendamento...</p>
            <time>há 2 dias</time>
            <button type="button">marcar lida</button>
          </Notification>
          <Notification>
            <p>você possui um agendamento...</p>
            <time>há 2 dias</time>
            <button type="button">marcar lida</button>
          </Notification>
          <Notification>
            <p>você possui um agendamento...</p>
            <time>há 2 dias</time>
            <button type="button">marcar lida</button>
          </Notification>
          <Notification>
            <p>você possui um agendamento...</p>
            <time>há 2 dias</time>
            <button type="button">marcar lida</button>
          </Notification>
          <Notification>
            <p>você possui um agendamento...</p>
            <time>há 2 dias</time>
            <button type="button">marcar lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
