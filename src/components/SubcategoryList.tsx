import { FC } from 'react';
import { Subcategory } from '@/types';
import NoResults from '@/components/ui/NoResults';
import SubcategoryCard from '@/components/ui/SubcategoryCard';

interface SubcategoryListProps {
  items: Subcategory[];
}

const SubcategoryList: FC<SubcategoryListProps> = ({ items }) => {
  return (
    <div className='space-y-4 text-center'>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-4 md:hidden text-center align-center mx-5 w-full">
        {items.map((item) => (
          <SubcategoryCard
            key={item.id}
            data={item}
          />
        ))}
      </div>
      <div className="hidden md:flex justify-center space-between w-full overflow-auto">
        {items.map((item, index) => (
          <div key={item.id} className={index < items.length - 1 ? 'mr-10' : ''}>
            <SubcategoryCard
              data={item}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubcategoryList;
