type InputType = {
  name: string;
  children: string;
  require: boolean;
  value: string;
  text: string;
  onChanges: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  name,
  text,
  value,
  require,
  children,
  onChanges,
}: InputType) => {
  return (
    <div className="mb-2">
      <label className="block mb-1 ml-1 text-sm text-TX-main font-bold">
        {children}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        placeholder={text}
        required={require}
        onChange={onChanges}
        className="w-full px-3 md:px-4 py-1.5 md:py-2 text-TX-main border border-TX-main bg-BG-soft rounded-md focus:outline-none focus:ring-2 focus:ring-[#3586ff]"
      />
    </div>
  );
};

export default Input;
