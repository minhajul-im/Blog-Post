import { useState } from 'react';
import Input from '../common/Input';

type FieldsType = {
  name: string;
  phone: string;
  email: string;
  pack: string;
  address: string;
};

const data: FieldsType = {
  name: '',
  phone: '',
  email: '',
  pack: '',
  address: '',
};
type Event =
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLInputElement>;

const Order = () => {
  const [fields, setFields] = useState(data);

  const handleChange = (e: Event) => {
    const { name, value } = e.target;

    setFields({
      ...fields,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('fields', fields);
  };

  return (
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
        Number
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
      <Input
        name="pack"
        text="1 or 3 or 5"
        value={fields.pack}
        require={true}
        onChanges={handleChange}
      >
        Pack
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

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#335c99] to-[#1a2438] text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2"
      >
        Submit
      </button>
    </form>
  );
};

export default Order;
