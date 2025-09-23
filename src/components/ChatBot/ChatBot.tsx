'use client';

import { useEffect } from 'react';

interface ChatBotProps {
  projectId?: string;
  agentId?: string;
  languageCode?: string;
  location?: string;
  chatTitle?: string;
}

const ChatBot: React.FC<ChatBotProps> = ({
  projectId = 'aai-ps1-sandbox',
  agentId = '276d675c-72f4-4fd7-8b85-01a3a2d25c64',
  languageCode = 'en',
  location = 'us-central1',
  chatTitle = 'MD Primary Care Assistant',
}) => {
  useEffect(() => {
    // Load the CSS stylesheet
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href =
      'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css';
    document.head.appendChild(cssLink);

    // Load the JavaScript
    const script = document.createElement('script');
    script.src =
      'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
    script.async = true;
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const existingCSS = document.querySelector(
        'link[href*="df-messenger-default.css"]'
      );
      const existingScript = document.querySelector(
        'script[src*="df-messenger.js"]'
      );
      const existingMessenger = document.querySelector('df-messenger');

      if (existingCSS && existingCSS.parentNode) {
        existingCSS.parentNode.removeChild(existingCSS);
      }
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
      if (existingMessenger && existingMessenger.parentNode) {
        existingMessenger.parentNode.removeChild(existingMessenger);
      }
    };
  }, []);

  // Create the df-messenger HTML string
  const messengerHTML = `
    <df-messenger
      location="${location}"
      project-id="${projectId}"
      agent-id="${agentId}"
      language-code="${languageCode}"
      max-query-length="-1">
      <df-messenger-chat-bubble
        chat-title="${chatTitle}">
      </df-messenger-chat-bubble>
    </df-messenger>
  `;

  return (
    <>
      {/* Insert the df-messenger element */}
      <div dangerouslySetInnerHTML={{ __html: messengerHTML }} />

      <style jsx global>{`
        df-messenger {
          z-index: 999;
          position: fixed;
          --df-messenger-font-color: #000;
          --df-messenger-font-family: Google Sans;
          --df-messenger-chat-background: #f3f6fc;
          --df-messenger-message-user-background: #0891b2;
          --df-messenger-message-bot-background: #fff;
          bottom: 16px;
          right: 16px;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          df-messenger {
            bottom: 20px;
            right: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default ChatBot;
