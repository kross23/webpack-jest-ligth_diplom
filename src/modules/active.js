
const active = () => {
	const style = document.createElement('style');
	style.textContent = `
        .active{
        display: block ;
        }
        .none{
                display: none ;
                }
        `;
	document.head.appendChild(style);

};
export default active;
