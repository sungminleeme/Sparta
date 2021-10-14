export const idCheck = (id) => {
  let _reg = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\w+\.)+\w+$/;

  return _reg.test(id);
};

// export const pwCheck = (pwd) => {
//   // let _reg = /^((?=.*\\d)(?=.*[a-zA-Z])(?=.*[\\W]).{4 ,10})$/;
//   //   let _reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/
//   let _reg = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,10}$/;

//   return _reg.test(pwd);
// };
