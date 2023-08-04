// 화살표함수와 this
const dog = {
    name: '뽀삐',
    regulerFn: function(){
        console.log('reguler: ', this); // 자기자신 객체
    },
    arrowFn: () => {
        console.log('arrow: ', this); // window객체
    }
};

dog.regulerFn();
dog.arrowFn();

console.log('-----------------------------------');

const cat = {
    name: '나비',
    introduce: function(){
        console.log(`intro tihs: `, this);
        setTimeout(function() {
            console.log(`setTime: `, this);
        console.log(`안녕 제 이름은 ${this.name} 다옹`);
    }, 2000);
    }
};
cat.introduce();