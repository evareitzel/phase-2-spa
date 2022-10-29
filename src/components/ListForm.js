import {useState} from 'react'
import '../stylesheets/ListForm.css'


function ListForm({setLists}) {
  const [title, setTitle] = useState("")
  const [item, setItem] = useState("")
  const [item2, setItem2] = useState("")
  const [item3, setItem3] = useState("")
  const [item4, setItem4] = useState("")
  
  function handleTitleChange(e){
    e.preventDefault()
    setTitle(e.target.value)
  }
  
  function handleItemChange(e){
    e.preventDefault()
    setItem(e.target.value)
  }

  function handleItem2Change(e){
    e.preventDefault()
    setItem2(e.target.value)
  }

  function handleItem3Change(e){
    e.preventDefault()
    setItem3(e.target.value)
  }

  function handleItem4Change(e){
    e.preventDefault()
    setItem4(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    window.alert('Submitted!')
    const listData = {
      title: title,
      item1: item,
      item2: item2,
      item3: item3,
      item4: item4
    }
    // console.log(listData)
    fetch('http://localhost:3001/lists', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST', 
      body: JSON.stringify(listData)
    })
    .then(r => r.json())
    .then(data => setLists(data))
  
  }

  return (
    <>
      <h1>Add New Bullet List</h1>
      <form onSubmit={handleSubmit}>
          <label className="label">Title 
          <input 
            onChange={handleTitleChange} 
            placeholder="Name your List"
            type="text"
            value={title}
            className="form-input"
          />
          </label>
          <input 
            onChange={handleItemChange}
            placeholder="Task 1"
            type="text"
            value={item}
            className="form-input"
          />
          <input 
            onChange={handleItem2Change}
            placeholder="Task 2"
            type="text"
            value={item2}            
            className="form-input"
          />
          <input 
            onChange={handleItem3Change}
            placeholder="Task 3"
            type="text"
            value={item3}
            className="form-input"
          />
          <input 
            onChange={handleItem4Change}
            placeholder="Task 4"
            type="text"
            value={item4}
            className="form-input"  
          />
        <div className="btn-wrapper">
        <input type="submit" value="Submit" className="btn"/>
        </div>
      </form>
    </>
  )
}

export default ListForm