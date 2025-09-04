import swal from "sweetalert";

export default 
function doSwal(qiymat : string) {
  return swal({
    text : qiymat,
    timer: 1100,
    icon: "success",
    buttons: false as any,

  })
}