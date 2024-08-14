'use client';

import { useState } from 'react';
import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { toast } from 'react-toastify';
import { sendContactEmail } from '@/app/api/contact';
import { ContactType } from '@/app/api/email';

const CATEGORY_ITEMS = ['導入相談', 'キャリア相談'];
const CONTACT_DEFAULT = {
    name: '',
    email: '',
    category: CATEGORY_ITEMS[0],
    message: '',
}

const RequiredIcon = () => (
  <span className="bg-blue-900 text-white px-2 py-0.5 ml-3 text-xs">必須</span>
);

export default function Contact() {
  const [contact, setContact] = useState<ContactType>(CONTACT_DEFAULT);
  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>,
  ) => {
    const { value, name } = e.target;

    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastLoading = toast.loading('お問い合わせメールを送付します。');

    sendContactEmail({ ...contact })
      .then(() => {
        setContact(CONTACT_DEFAULT);
        toast.update(toastLoading, {
          render: 'メール送付を成功しました。',
          type: 'success',
          isLoading: false,
          autoClose: 2000,
        });
      })
      .catch((err) => {
        console.error(err)
        toast.update(toastLoading, {
          render: 'メール送付を失敗しました。',
          type: 'error',
          isLoading: false,
          autoClose: 2000,
        });
      });
  };

  return (
    <div id="contact" className="bg-gray-100 py-16 lg:px-0">
      <div className="max-w-[730px] lg:m-auto ml-8 mr-12">
        <div className="text-center">
          <h2 className="font-semibold text-2xl">お問い合わせ</h2>
          <div className="my-4 text-sm">
            弊社へのお問い合わせはこちらよりお願い致します。
            <br />
            3営業日以内にご返信させて頂きます。
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <div className="my-10">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 text-lg font-semibold flex items-center"
              >
                お名前
                <RequiredIcon />
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="お名前"
                className="w-full rounded-md border border-gray-400 bg-white py-3 px-5 text-gray-500 outline-none focus:border-purple-700 focus:shadow-md"
                required
                value={contact.name}
                onChange={onChange}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 text-lg font-semibold flex items-center"
              >
                メールアドレス
                <RequiredIcon />
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-gray-400 bg-white py-3 px-5 text-gray-500 outline-none focus:border-purple-700 focus:shadow-md"
                required
                value={contact.email}
                onChange={onChange}
              />
            </div>
            <div className="mb-5">
              <InputLabel
                id="category"
                className="mb-3 text-lg font-semibold flex items-center text-black"
              >
                カテゴリー
                <RequiredIcon />
              </InputLabel>
              <Select
                labelId="category"
                className="w-full rounded-md border-[0.5px] border-gray-300 bg-white px-1 outline-none focus:border-purple-700 focus:shadow-md"
                placeholder="お問い合わせ内容をご記入ください"
                value={contact.category}
                onChange={onChange}
                name="category"
              >
                {CATEGORY_ITEMS.map((item, idx) => (
                  <MenuItem key={idx} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 text-lg font-semibold flex items-center"
              >
                お問い合わせ内容
                <RequiredIcon />
              </label>
              <textarea
                rows={4}
                name="message"
                id="message"
                placeholder="お問い合わせ内容をご記入ください"
                className="w-full resize-none rounded-md border border-gray-400 bg-white py-3 px-5 text-gray-500 outline-none focus:border-purple-700 focus:shadow-md"
                required
                value={contact.message}
                onChange={onChange}
              ></textarea>
            </div>
            <div className="mb-5 text-sm">
              ※
              お問い合わせ内容は、選択したカテゴリーに関する情報提供のために使用されます。
            </div>
          </div>
          <div>
            <button className="hover:shadow-form rounded-md bg-purple-700 py-3 px-8 text-lg font-semibold text-white outline-none">
              送信
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
