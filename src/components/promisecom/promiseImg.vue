<template>
    <div>
        <div>
            promise图片预加载
        </div>
        <div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            arr: []
        }
    },
    mounted(){
        for(let i = 0; i < 3; i++){
            this.arr.push(this.loadImg(`img-${i}.jpg`,i))
        }
        Promise.race(this.arr).then((imgarr)=>{
            console.log(imgarr)
        })
    },
    methods:{
        loadImg(_src, index){
            return new Promise((resolve, reject)=>{
                let img = new Image();
                img.src = _src;
                img.onload = () =>{
                    resolve(img);
                };
                img.onerror = () =>{
                    reject(`加载失败${index}`,)
                }
            })
        }
    }
}
</script>