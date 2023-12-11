// hooks/useVariantSelection.ts
import { useState } from 'react';

interface VariantSelectionProps {
    onVariantSelect: (option: string) => void;
}

const useVariantSelection = ({ onVariantSelect }: VariantSelectionProps) => {
    const [selectedVariant, setSelectedVariant] = useState<string | null>(null);

    const handleVariantClick = (option: string) => {
        setSelectedVariant(option);
        onVariantSelect(option);
    };

    return {
        selectedVariant,
        handleVariantClick,
    };
};

export default useVariantSelection;
