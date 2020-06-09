
const active = () => {
	const style = document.createElement('style');
	style.textContent = `
        .active{
        display: block ;
        }
        .none{
        display: none ;
        }
        .transition{
                transition: 0.3s;     
        }
        `;
	document.head.appendChild(style);

};
export default active;
