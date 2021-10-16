export const idCheck = (id) => {
  let _reg = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\w+\.)+\w+$/;

  return _reg.test(id);
};

export const pwCheck = (pwd) => {
  let _reg =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{4,10}$/;

  return _reg.test(pwd);
};
