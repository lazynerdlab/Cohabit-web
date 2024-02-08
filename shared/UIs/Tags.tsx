import { Checkbox } from "antd";
import React from "react";

export interface Tag {
  id?: number;
  label?: string;
  title?: string;
  area?: string;
  text?: string;
}

interface MultiSelectTagsProps {
  options: Tag[];
  selectedTags: Tag[];
  onSelectTag: (tags: Tag[]) => void;
}

export const MultiSelectTags: React.FC<MultiSelectTagsProps> = ({
  options,
  selectedTags,
  onSelectTag,
}) => {
  const isTagSelected = (tag: Tag) =>
    selectedTags.some((selectedTag) => selectedTag.id === tag.id);

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
          className="p-[0.5rem] text-center cursor-pointer"
        >
          {tag.title || tag.label}
        </p>
      ))}
    </>
  );
};

export const FilterTags = ({
  options,
  selectedTags,
  onSelectTag,
}: MultiSelectTagsProps) => {
  const isTagSelected = (tag: Tag) =>
    selectedTags?.some((selectedTag) => selectedTag.id === tag.id);

  const handleTagClick = (tag: Tag) => {
    const updatedTags = isTagSelected(tag)
      ? selectedTags?.filter((selectedTag) => selectedTag.id !== tag.id)
      : [...selectedTags, tag];

    onSelectTag(updatedTags);
  };

  return (
    <div className="flex flex-col gap-2">
      {options.map((tag) => (
        <p
          key={tag.id}
          onClick={() => handleTagClick(tag)}
          className=" flex gap-2 text-center cursor-pointer"
        >
          <Checkbox checked={isTagSelected(tag)} />
          {tag.title || tag.label || tag.text || tag.area}
        </p>
      ))}
    </div>
  );
};
