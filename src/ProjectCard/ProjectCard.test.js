import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ProjectCard from './ProjectCard'

describe('ProjectCard', () => {

  const cardValues = {
    id: 1,
    project_name: 'myproject',
    user_id: 1,
    last_updated: '2020-12-22 18:14:37',
  }

  it('renders without crashing', () => {
    const { id, project_name, user_id, last_updated } = cardValues

    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <ProjectCard id={id} project_name={project_name} user_id={user_id} last_updated={last_updated}/>
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

})
