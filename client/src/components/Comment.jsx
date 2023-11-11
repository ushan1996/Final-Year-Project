import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0px;
`;
const Avator = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 7px;
`;
const Deatails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Name = styled.span`
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;
const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.textSoft}
    margin-left: 5px;
    `;
const Text = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;
const Comment = ({ comment }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchComment = async () => {
      const res = await axios.get(`/users/find/${comment.userId}`);
      setChannel(res.data);
    };
    fetchComment();
  }, [comment.userId]);
  return (
    <Container>
      <Avator
        src={
          channel.img
            ? channel.img
            : 'https://firebasestorage.googleapis.com/v0/b/smarttube-b0596.appspot.com/o/default.png?alt=media&token=66493d31-ee5a-42aa-9822-f97cb23ee54c'
        }
      />

      <Deatails>
        <Name>
          {channel.name} <Date>1 Day ago</Date>
        </Name>
        <Text>{comment.desc}</Text>
      </Deatails>
    </Container>
  );
};

export default Comment;
