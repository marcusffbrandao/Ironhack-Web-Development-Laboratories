import React from 'react';
import { Title, Button, Icon, Text } from '../../atoms';
import { Table } from '../../organisms';

const Contacts = ({ contacts, onclick, deleteContact }) => {
  const columns = [
    {
      header: 'Picture',
      data: contacts.map((contact) => {
        return {
          pictureUrl: contact.pictureUrl,
          name: `${contact.name} picture`,
        }
      }),
      render: ({ pictureUrl, name }) => <Icon pictureUrl={pictureUrl} name={name} width="100px" />
    },
    {
      header: 'Name',
      data: contacts.map((contact) => {
        return {
          name: contact.name,
        }
      }),
      render: ({ name }) => <Text>{name}</Text>
    },
    {
      header: 'Popularity',
      data: contacts.map((contact) => {
        return {
          popularity: contact.popularity,
        }
      }),
      render: ({ popularity }) => <Text>{popularity}</Text>
    },
    {
      header: 'Action',
      data: contacts.map((contact, idx) => {
        return {
          id: idx,
        }
      }),
      render: ({ id }) => <Button onclick={() => deleteContact(id)}>Delete</Button>
    },
  ];

  return (
    <div>
      <Title htmlType="H1" >Iron Contacts</Title>
      <Button type="button" onclick={onclick}>Add Random Contact</Button>
      <Table data={columns} />
    </div>
  );
};

export default Contacts;
