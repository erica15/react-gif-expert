// api key de giphy developers
// 7MT7RoQCZEtwN7GmlKU4yJS1a59Ab15V
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GitExpertApp = () => {
  const [categories, setcategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (
      categories
        .map((category) => category.toLocaleLowerCase())
        .includes(newCategory.toLocaleLowerCase())
    )
      return;
    setcategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GitExpert App con React</h1>
      {/* input */}
      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      ></AddCategory>

      {/* Listado de Gif */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
