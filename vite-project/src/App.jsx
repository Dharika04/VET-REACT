import { useState,useEffect } from "react";

function App() {
const [name,setname]= useState("");
const [email,setEmail]=useState("");
const [department,setDepartment]=useState("");
const[age,setAge]=useState("");

const [students,setstudents]=useState([]);
const [editIndex,setEditIndex] = useState(null);
useEffect(() => {
  const savedstudents = 
  JSON.parse(
    localStorage.getItem("students")
  )|| [];
  setstudents(savedstudents);
},[]);
const handlesubmit = ()=> {
   if(
    name === "" ||
    email=== "" ||
    department=== "" ||
    age === ""
   ) {
    alert("please fill all fields");
    return;
   }
  const student= {
    name,
    email,
    department,
    age
  };

  if (editIndex!== null){
    const updatestudents= [...students];
    updatestudents[editIntex]= student;
  }








  }










  return(
    <div
    style={{
      width:"700 px",
      margin:"30px auto",
      padding:"25px",
      borderRadius: "25px",
      boxshadow:
      "0 0 15px rgba(0,0,0,0.2)"
    
    }}
    >
 <h1
style={{
        textAlign:"center"
      }}
      >
        learner Registration 

      </h1>
      <input
      type="text"
      placeholder="Enter Name"
      value={name}
      onChange={(e) =>
        setname(e.target.value)
      }
      style={inputstyle}
      />
    
        <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        style={inputstyle}
        />

        <input
        type="text"
        placeholder="Enter Department"
        value={department}
        onChange={(e) =>
          setDepartment(e.target.value)
        }
        style={inputstyle}
        />

        <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(e) =>
          setAge(e.target.value)
        }
        style={inputstyle
          />
        }

        <button
        onclick={handlesubmit}
        style={buttonstyle}
        >
          {
            editIndex !==null
            ?
            "update Student"
            :
            "Add Student"
          }
        </button>
        <h2>
          Student List 
        </h2>

        <table
        border="1"
        cellPadding="10"
        style={{
          width:"100",
          borderCollapse:
          "collapse"
        }}
        >

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Age</th>
              <th>Actions</th>
           </tr>
          </thead>

          <tbody>
            {
            students.map(
              (student,index) => (
                <tr key={index}>
                  <td>
                    {student.name}
                  </td>
                  <td>
                    {student.email}
            
                  </td>

                  <td>
                    {
                      student.department
                    }
                  </td>

                  <td>
                    {student.age}
                  </td>

                  <td>
                    <button
                    onClick={() =>
                      handleEdit(index)
                    }
                    >
                      Edit 
                      </button>

                </td>
                <td>
                <button
                onClick={() =>
                  handleDelete(index)
                }
                style={{
                  marginLeft:
                  "10px"
                }}
                  >
                    Delete 
                  </button>
                  </td>
                  </tr>
              ))
            }
            </tbody>
            </table>
            </div>
            );
          }
</tbody>