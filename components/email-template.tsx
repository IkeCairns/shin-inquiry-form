import React from "react";

interface EmailTemplateProps {
  username: string;
  email: string;
  content: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  username,
  email,
  content
}) => {
  return (
    <div>
      <h1>Hello, {username}</h1>
      <p>from {email}</p>
      <p>{content}</p>
    </div>
  );
};
