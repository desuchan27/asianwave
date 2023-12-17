import { FC } from 'react';
import { Subcategory } from '@/types';
import NoResults from '@/components/ui/NoResults';
import SubcategoryCard from '@/components/ui/SubcategoryCard';

interface SubcategoryListProps {
  items: Subcategory[];
}

const SubcategoryList: FC<SubcategoryListProps> = ({ items }) => {
  return (
    <div className='space-y-4 text-center'> {/* Center the text within the container */}
      {items.length === 0 && <NoResults />}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto'> {/* Center the grid along the x-axis */}
        {items.map((item) => (
          <SubcategoryCard
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

export default SubcategoryList;