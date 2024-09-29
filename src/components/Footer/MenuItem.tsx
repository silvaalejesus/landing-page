import React from "react";

interface MenuItemProps {
  item: {
    label: string;
    links: string[];
  };
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const { label, links } = item;

  return (
    <div className="menu-item-title flex-1 w-full flex gap-4 flex-col">
      <h3 className="font-bold">{label}</h3>
      <ul>
        {links.map((link) => (
          <li key={link} className="mb-4 hover:text-secondary-300">
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItem;
