function imp(val){
    if (2 > val) {
      return "btn-success";
    } else if (4 > val) {
        return "btn-warning";
    } else if (5 >= val) {
        return "btn-danger";
    };
};

export default imp;