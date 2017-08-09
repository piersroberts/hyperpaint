import { h, app } from "hyperapp";

const Cell = (props, children) => {
	const style = {
		backgroundColor:props.colour,
		border:'solid 0.5px'
	}

	const handleClick = (e)=>{
		if(e.buttons){
			props.paint(props.index);
		}
	};

	return <div onmouseenter={handleClick} onmousedown={handleClick} style={style}></div>
}


const Grid = (props, children) => {
	const style = {
		cursor:'crosshair',
		border:'solid 1px',
		display:'inline-grid',
		gridTemplateColumns:`repeat(${props.columns}, 10px)`,
		gridTemplateRows:`repeat(${props.rows}, 10px)`
	}
	const cells = props.cells.map((cell,i)=><Cell index={i} colour={cell.colour} paint={props.paint}/>)
	return <div style={style}>{cells}</div>;
}

const Paint = (props) => <div
	style={{
		border: 'solid 0.5px',
		width:'2em',
		height:'2em',
		display:'inlineBlock',
		backgroundColor:props.colour
	}}
	onclick={()=>props.setPaintColour(props.colour)}
/>

const Palette = (props) => {
	return <div>
		<Paint setPaintColour={props.setPaintColour} colour='red'/>
		<Paint setPaintColour={props.setPaintColour} colour='green'/>
		<Paint setPaintColour={props.setPaintColour} colour='yellow'/>
		<Paint setPaintColour={props.setPaintColour} colour='blue'/>
		<Paint setPaintColour={props.setPaintColour} colour='black'/>
		<Paint setPaintColour={props.setPaintColour} colour='white'/>
	</div>
}

app({
  state: {
  	rows:32,
  	columns:32,
  	cells:[],
  	penColour:'green',
  	paperColour:'white'
  },
  actions: {
  	paint: (state, actions, index) => {
  		const newState = {...state}
		newState.cells[index].colour = state.penColour
   		return newState
  	},
  	setPaintColour: (state,actions,penColour)=>{
  		return {...state, penColour}
  	},
  	clear: (state) => {
  		const cells = [];
  		for(let i =0; i < state.rows*state.columns; i++){
  			cells.push({
  				colour:state.paperColour
  			});
  		}
  		return {...state, cells}
  	}
  },

  view: (state,actions) => (
  	<div>
  		<Grid paint={(i)=>{actions.paint(i)}} cells={state.cells} rows={state.rows} columns={state.columns}/>
  		<Palette setPaintColour={(paintColour=>{actions.setPaintColour(paintColour)})} />
  		<button onclick={actions.clear}>Clear</button>
  	</div>
  )
})