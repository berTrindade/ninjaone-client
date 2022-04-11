import { FaEdit, FaTrashAlt } from 'react-icons/fa';

export function Device({ item, handleEdit, handleRemove }) {

  if(!item.id || !item.system_name || !item.type || !item.hdd_capacity ) return null;

  return (
        <tr>
            <td>{item.system_name}</td>
            <td>{item.type}</td>
            <td>{item.hdd_capacity} GB</td>
            <td>
                <div>
                    <button onClick={() => handleEdit(item)}>
                        <FaEdit />
                    </button> 
                    <button onClick={() => handleRemove(item)}>
                        <FaTrashAlt />
                    </button> 
                </div>
            </td>
        </tr>
    );
}
