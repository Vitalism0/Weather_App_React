import css from "./Input.module.css";
interface InputProps {
  onSearch: (query: string) => void;
}
export default function Input({ onSearch }: InputProps) {
  const search = (formData: FormData) => {
    const query = formData.get("query") as string;
    onSearch(query);
  };
  return (
    <form action={search}>
      <input
        className={css.mainInput}
        type="text"
        name="query"
        placeholder="Enter city name"
      />
    </form>
  );
}
