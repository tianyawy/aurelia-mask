export class App {
  mask = '(999) (999) **999';
  mask2 = '**/***/****'; 
  findSecondInput = _findSecondInput;

  update(i) {
      this['value'+i] = "123456AB789";
  }

}

function _findSecondInput(elt) {
    return elt.getElementsByTagName('input')[1];
}
