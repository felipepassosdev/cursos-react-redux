import React, { useState } from 'react';

// import { Container } from './styles';
import { useSelector, useDispatch } from 'react-redux'
import { addCourse } from '../../store/reducer'

function CourseList() {
    const [form, setForm] = useState({ title:''})

// NO USESELECTOR RECEBE-SE TODO ESTADO DA APLICAÇÃO     
    const courses = useSelector(state => state.data)
    const dispatch = useDispatch();

    function formChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
      }  

    function onSubmit(e) {
      e.preventDefault();
      dispatch(addCourse(form))
    }
  return ( 
    <form className="container mt-5" onSubmit={onSubmit}> 
        <ul>
            { courses.map(course => <li key={course}>{ course }</li>) }
        </ul>
        <input onChange={formChange} type="text" value={form.title}/>
        <button type="button" type="submit">ADD</button>
    </form>
  );
}

export default CourseList;