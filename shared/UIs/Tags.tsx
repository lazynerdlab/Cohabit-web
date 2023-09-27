import React from 'react';

export interface Tag {
    id: number;
    // _id: string;
    label: string;
    title: string;
}

interface MultiSelectTagsProps {
    options: Tag[];
    selectedTags: Tag[];
    onSelectTag: (tags: Tag[]) => void;
}

export const MultiSelectTags: React.FC<MultiSelectTagsProps> = ({ options, selectedTags, onSelectTag }) => {
    // const handleTagClick = (tag: Tag) => {
    //     const tagIndex = selectedTags.findIndex((selectedTag) => selectedTag.id === tag.id);
    //     if (tagIndex === -1) {
    //         // If the tag is not already selected, add it to the selected tags.
    //         onSelectTag([...selectedTags, tag]);
    //     } else {
    //         // If the tag is already selected, remove it from the selected tags.
    //         const updatedTags = [...selectedTags];
    //         updatedTags.splice(tagIndex, 1);
    //         onSelectTag(updatedTags);
    //     }
    // };
    const isTagSelected = (tag: Tag) => selectedTags.some((selectedTag) => selectedTag.id === tag.id);

    const handleTagClick = (tag: Tag) => {
        const updatedTags = isTagSelected(tag)
            ? selectedTags.filter((selectedTag) => selectedTag.id !== tag.id)
            : [...selectedTags, tag];

        onSelectTag(updatedTags);
    };

    return (
        <>
            {options.map((tag) => (
                <p
                    key={tag.id}
                    style={{
                        backgroundColor: isTagSelected(tag) ? "#010886" : "transparent",
                        color: isTagSelected(tag) ? "white" : "#666161",
                        border: "1px solid #666161",
                        borderRadius: "20px",
                        width: "180px",
                    }}
                    onClick={() => handleTagClick(tag)}

                    className='p-[0.5rem] text-center cursor-pointer'
                >
                    {tag.title || tag.label}
                </p>
            ))}
        </>
    );
};


