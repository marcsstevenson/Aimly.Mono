import { AzureCommunicationTokenCredential, CommunicationUserIdentifier } from '@azure/communication-common';
import {
  CallAdapter,
  CallComposite,
  createAzureCommunicationCallAdapter,
  ChatAdapter,
  ChatComposite,
  createAzureCommunicationChatAdapter,
  fromFlatCommunicationIdentifier,
} from '@azure/communication-react';
import React, { useEffect, useMemo, useState } from 'react';

function VideoCall(): JSX.Element {
  const endpointUrl = 'https://aimly-shared-dev.communication.azure.com/';
  const userId = '8:acs:3730daee-6cbd-4621-a615-d3dce1f97571_0000000e-741f-6e73-3003-6b3a0d001ac5';
  const displayName = 'Marc';
  const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjEwMyIsIng1dCI6Ikc5WVVVTFMwdlpLQTJUNjFGM1dzYWdCdmFMbyIsInR5cCI6IkpXVCJ9.eyJza3lwZWlkIjoiYWNzOjM3MzBkYWVlLTZjYmQtNDYyMS1hNjE1LWQzZGNlMWY5NzU3MV8wMDAwMDAwZS03NDFmLTZlNzMtMzAwMy02YjNhMGQwMDFhYzUiLCJzY3AiOjE3OTIsImNzaSI6IjE2Mzk5NDMzNTkiLCJleHAiOjE2NDAwMjk3NTksImFjc1Njb3BlIjoidm9pcCxjaGF0IiwicmVzb3VyY2VJZCI6IjM3MzBkYWVlLTZjYmQtNDYyMS1hNjE1LWQzZGNlMWY5NzU3MSIsImlhdCI6MTYzOTk0MzM1OX0.oVa8HHRW0ey7SerDMs7sXVEIeno7l9PGdHYGO44FjpVcePVm9QjlXTC0bFi5vKGWzNpqg-cTY_atZh0voMVC4X8IkYqpWqijABS__ys0twVQ7VxIO9yqbNjGJo6CaHnsOCJItGLtty9IwMNbvjRh_bE3oUsjOybn2htup_46DV5b2GFWCTxbxuWx3vdpvI1QOXAeyFYjgMf8-yzM1GX-yfnmKQZApH6ad3yMZphCO2TfVFNgbcOm6uBa-X9axkpB9kyPLvvTeQS37fh28nwecKJhYuIwd2px2PCtXbyWXi381h1qWWFgg1Nv67ZlIQNnB0M3x69ZFy_o8Fe26eDTbg';

  //Calling Variables
  //For Group Id, developers can pass any GUID they can generate
  const groupId = '7fa69d03-d381-4598-bfd6-2849d7f6cf4e';
  const [callAdapter, setCallAdapter] = useState<CallAdapter>();

  //Chat Variables
  const threadId = '68a0594c-a327-4672-aaf6-b56e1169f556';
  const [chatAdapter, setChatAdapter] = useState<ChatAdapter>();

  // We can't even initialize the Chat and Call adapters without a well-formed token.
  const credential = useMemo(() => {
    try {
      return new AzureCommunicationTokenCredential(token);
    } catch {
      console.error('Failed to construct token credential');
      return undefined;
    }
  }, [token]);

  useEffect(() => {
    if (credential !== undefined) {
      const createAdapter = async (credential: AzureCommunicationTokenCredential): Promise<void> => {
        setChatAdapter(
          await createAzureCommunicationChatAdapter({
            endpoint: endpointUrl,
            userId: fromFlatCommunicationIdentifier(userId) as CommunicationUserIdentifier,
            displayName,
            credential,
            threadId
          })
        );
        setCallAdapter(
          await createAzureCommunicationCallAdapter({
            userId: fromFlatCommunicationIdentifier(userId) as CommunicationUserIdentifier,
            displayName,
            credential,
            locator: { groupId }
          })
        );
      };
      createAdapter(credential);
    }
  }, [credential]);

  if (!!callAdapter && !!chatAdapter) {
    // return <h1>Hooray! You set up adapters <span role="img">🎉🎉🎉</span></h1>;

    return (
      <>
        <ChatComposite adapter={chatAdapter} />
        <CallComposite adapter={callAdapter} />
      </>
    );
  }
  if (credential === undefined) {
    return <h3>Failed to construct credential. Provided token is malformed.</h3>;
  }
  return <h3>Initializing...</h3>;
}

export default VideoCall;
