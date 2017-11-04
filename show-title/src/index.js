import React, {
	Component
} from 'react'

import ReactDOM from 'react-dom'
import './index.css'
//showtitle
/*现在需要你构建两个组件。一个组件为 Lesson 组件，渲染特定章节的内容。可以接受一个名为 lesson 的 props，并且把章节以下面的格式显示出来：

<h1>Lesson 1: title</h1>
<p>Lesson 1: description</p>

点击每个章节的时候，需要把章节在列表中的下标和它的标题打印（console.log）出来，例如第一个章节打印： 0 - Lesson 1: title，第二个章节打印：1 - Lesson 2: title。

另外一个组件为 LessonsList，接受一个名为 lessons 的 props，它会使用 Lesson 组件把章节列表渲染出来。*/
const lessons = [{
		title: 'Lesson 1: title',
		description: 'Lesson 1: description'
	}, {
		title: 'Lesson 2: title',
		description: 'Lesson 2: description'
	}, {
		title: 'Lesson 3: title',
		description: 'Lesson 3: description'
	}, {
		title: 'Lesson 4: title',
		description: 'Lesson 4: description'
	}

]
class Lesson extends Component {
	/* TODO */
	render() {
		const {
			title,
			index
		} = this.props
			// const index = this.props.index
			// const title = this.props.title
		return (
			<div onClick={()=>{console.log(index + '-' + title.title)}}>
        <h1>{title.title}</h1>
        <p>{title.description}</p>
      </div>
		)
	}
}

class LessonsList extends Component {
	/* TODO */
	render() {
		return (

			<div> {lessons.map((lesson,i)=><Lesson key={i} index={i} title={lesson}/>)}
      </div>
		)
	}
}

ReactDOM.render(
	<LessonsList />,
	document.getElementById('root')
)