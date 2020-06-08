
const active = () => {
	const style = document.createElement('style');
	style.textContent = `
        .active{
        display: block ;
        }`;
	document.head.appendChild(style);

};
export default active;
