// HOC 
// hoc is going to return props children it gets

// can return multiple children elements
// wrapper comp that doesn't render any JSX on its own 
// naming convention: use 'With' Prefix in filename

const WithLastLogin = (props ) =>  props.children;

export default WithLastLogin;