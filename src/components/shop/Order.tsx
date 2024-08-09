import React, { useState } from 'react';
import Input from '../common/Input';
import CheckboxGroup from './Checkbox';
import { ID } from './ProductDetails';
import SuccessMessage from './SuccessMessage';
import { PRODUCTS, ProductType } from '../../constant/mock-data';
// import emailjs from '@emailjs/browser';
// import {
//   emailServiceId,
//   emailTemplateId,
//   emailPublicKey,
// } from '../../constant/constant';

type FieldsType = {
  name: string;
  phone: string;
  email: string;
  address: string;
};

const data: FieldsType = {
  name: '',
  phone: '',
  email: '',
  address: '',
};

export type CheckType = { select: string; err: string };

type Event =
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLInputElement>;

const Order = ({ id }: ID) => {
  const [fields, setFields] = useState(data);
  const [active, setActive] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [check, setCheck] = useState<CheckType>({ select: '', err: '' });

  const product = PRODUCTS.find((item: ProductType) => item.id === id);
  const pack = product?.pis.split(' ')[0];

  const handleChange = (e: Event) => {
    const { name, value } = e.target;

    setFields({
      ...fields,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!check.select) {
      setCheck({ ...check, err: 'Please Select Location!' });
      return;
    }
    setActive(true);
    const templateParams = {
      to_name: fields.name,
      from_name: 'Nic Out',
      message: `
        Name: ${fields.name}
        Phone: ${fields.phone}
        Email: ${fields.email}
        Pack: ${product?.pis}
        Price: ${product?.price}
        Address: ${fields.address}
      `,
    };

    setTimeout(() => {
      setActive(false);
      setIsSuccess(true);

      console.log('email template', templateParams);
    }, 3000);

    // try {
    //   const res = await emailjs.send(
    //     emailServiceId,
    //     emailTemplateId,
    //     templateParams,
    //     'KzX2FdYujBD5LwJl4'
    //   );

    //   console.log('Email sent successfully', res);

    //   setFields(data);
    //   setActive(false);
    // } catch (err) {
    //   console.log('ERROR FROM EMAIL SEND: ', err);
    //   setActive(false);
    // }
  };

  return (
    <React.Fragment>
      {isSuccess ? (
        <SuccessMessage
          location={check.select}
          price={Number(product?.price)}
          pack={Number(pack)}
        />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-[320px] md:w-[450px] lg:[520px] my-6 p-2 md:p4 transition-all duration-200"
        >
          <Input
            name="name"
            text="John David"
            require={true}
            value={fields.name}
            onChanges={handleChange}
          >
            Full Name
          </Input>
          <Input
            name="phone"
            text="+88013 11 90 23 **"
            require={true}
            value={fields.phone}
            onChanges={handleChange}
          >
            Phone Number
          </Input>
          <Input
            name="email"
            text="example@gmail.com"
            value={fields.email}
            require={false}
            onChanges={handleChange}
          >
            Email
          </Input>

          <div className="mb-4">
            <label className="block text-TX-soft text-sm font-bold mb-2">
              Full Address
            </label>
            <textarea
              rows={3}
              required
              name="address"
              value={fields.address}
              onChange={handleChange}
              placeholder="Give your full address!"
              className="w-full px-4 py-2 text-TX-main border border-TX-soft bg-BG-soft rounded-md focus:outline-none focus:ring-2 focus:ring-[#3586ff]"
            ></textarea>
          </div>

          {check.err && (
            <p className="text-red-600 text-sm text-center font-medium">
              {check.err}
            </p>
          )}

          <CheckboxGroup onChecked={setCheck} check={check} />

          <button
            type="submit"
            disabled={active}
            className={`w-full ${active ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-[#335c99] to-[#1a2438]'} text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2 transition-all duration-150`}
          >
            {active ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}
    </React.Fragment>
  );
};

export default Order;
