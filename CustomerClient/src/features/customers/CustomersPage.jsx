
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../../Slices/SliceCustomers";

import CustomersTable from "./CustomersTable";
import CustomerAdd from "./CustomerAdd";
import CustomerEdit from "./CustomerEdit";
import CustomerDelete from "./CustomerDelete";
import "../styles/customers.css";
import CustomerSendEmail from "./CustomerSendEmail";


/**
 * דף ניהול לקוחות
 */
export default function CustomersPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.customers.list);

  const [addOpen, setAddOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);

  const [search, setSearch] = useState("");
const [emailCustomer, setEmailCustomer] = useState(null);
  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  // סינון לקוחות
  const filteredData = data?.filter((c) =>
    `${c.firstName} ${c.lastName} ${c.email} ${c.phone} ${c.address}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <div className="header">
        <h1>לקוחות</h1>
        <button onClick={() => setAddOpen(true)}>+כככככככככככככככככככככככככככככככככככככככ הוספת לקוח</button>
      </div>

      {/* סינון */}
      <input
        className="filter-input"
        placeholder="חיפוש לקוח..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* <CustomersTable
        data={filteredData}
        onEdit={setEditItem}
        onDelete={(c) => setDeleteItem(c)}
      /> */}
<CustomersTable
  data={filteredData}
  onEdit={setEditItem}
  onDelete={(c) => setDeleteItem(c)}
  onEmail={setEmailCustomer}
/>
      {addOpen && <CustomerAdd onClose={() => setAddOpen(false)} />}

      {editItem && (
        <CustomerEdit item={editItem} onClose={() => setEditItem(null)} />
      )}

      {deleteItem && (
        <CustomerDelete
          customer={deleteItem}
          onClose={() => setDeleteItem(null)}
        />
      )}

      {emailCustomer && (
  <CustomerSendEmail
    customer={emailCustomer}
    onClose={() => setEmailCustomer(null)}
  />
)}
    </div>
  );
}

