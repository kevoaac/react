/* eslint-disable react/prop-types */
import { Checkbox } from "@nextui-org/react";
import { useState } from "react";

function Task({ id, text, onEdit, onDelete }) {

  const textStyles = 'text-white font-semibold text-xl'
  const [done, setDone] = useState(false)

  return (
    <div className={`h-16 border-1 rounded-lg border-gray-50 flex justify-between transition-colors ${done ? 'bg-gray-600' : ''}`}>
      <Checkbox lineThrough size="lg" onClick={() => setDone(!done)}>
        <h3 className={textStyles}>
          {text}
        </h3>
      </Checkbox>
      {
        done
          ? null
          : <aside className="p-2 flex">
            <button className="ml-2" onClick={() => onEdit(id)}>
              ✏️
            </button>
            <button className="ml-2" onClick={() => onDelete(id)}>
              🗑
            </button>
          </aside>
      }

    </div>
  );
}

export default Task;