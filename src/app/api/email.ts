import emailjs from '@emailjs/nodejs';

export type ContactType = {
  name: string;
  email: string;
  category: string;
  message: string;
};

class EmailJsConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
  privateKey: string;

  constructor() {
    this.serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    this.templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    this.publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
    this.privateKey = process.env.NEXT_PUBLIC_EMAILJS_PRIVATE_KEY || '';
  }

  isConfigured() {
    return Boolean(
      this.serviceId && this.templateId && this.publicKey && this.privateKey,
    );
  }
}

export function sendEmail({ name, email, category, message }: ContactType) {
  const emailjsConfig = new EmailJsConfig();

  if (!emailjsConfig.isConfigured()) {
    throw new Error('サーバーエラーが発生しました');
  }

  const { serviceId, templateId, publicKey, privateKey } = emailjsConfig;

  return emailjs.send(
    serviceId,
    templateId,
    {
      name,
      email,
      category,
      message,
    },
    { publicKey, privateKey },
  );
}
