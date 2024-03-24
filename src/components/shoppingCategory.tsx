import { Column_menu } from "./categorymenu/columnMenu";
import { Row_menu } from "./categorymenu/rowCtegory";

export const Shop_by_category = () => {
  return (
    <div className='p-2 my-2 space-y-2'>
      <Row_menu />
      <Column_menu />
    </div>
  );
};
