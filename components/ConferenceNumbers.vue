<template>
<div class=" container py-32">
    <div>
        <div class="relative mb-16 mx-auto max-w-md">
            <div class="relative font-medium text-[35px] z-10 ">Conference in numbers</div>
            <div class="absolute -left-20 -top-7 z-0">
            <img src="../static/img/Numbers.png" alt="">
            </div>
        </div>
    
    <div class="flex justify-center gap-12">
            <div class="flex basis-1/3 flex-col items-start py-8">
                <div class="relative flex flex-col items-end w-fit pl-[30px]">
                    <count-to
                        ref="countMinute"
                        v-view.once="viewMinutCount"
                        :start-val="0"
                        :end-val="300"
                        :duration="3000"
                        :autoplay="true"
                        :prefix="'+'"
                        class="block text-5xl font-medium leading-[30px]"
                    />
                    <div class="absolute scale-50 -top-4 -left-2">
                        <svg width="43" height="40" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 40L31 -1.35505e-06L43 -1.87959e-06L12 40L0 40Z" fill="#39E8EA"/>
                        </svg>
                    </div>
                    <div class="font-medium">MINUTES</div>
                </div>
                <div class="ml-[7.36rem] max-w-xs font-normal">The debate and presentations about the latest trends in building telecommunications networks: ML/AI, Edge and cloud RAN, Security and more.</div>
            </div>
        <div class="flex flex-col  basis-1/3 items-start py-8">
            <div class="relative flex flex-col items-end w-fit pl-[30px]">
                <count-to
                    ref="countPrelegent"
                    v-view.once="viewPrelegentCount"
                    :start-val="0"
                    :end-val="30"
                    :duration="3000"
                    :autoplay="true"
                    class="text-5xl font-medium leading-[30px]"
                 />
                <div class="absolute scale-50 -top-4 -left-2">
                    <svg width="43" height="40" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 40L31 -1.35505e-06L43 -1.87959e-06L12 40L0 40Z" fill="#39E8EA"/>
                    </svg>
                </div>
                <div class="font-medium">SPEAKERS</div>
            </div>
            <div class="ml-[3.36rem] max-w-xs font-normal">Top figures from universities and R&D centers leading the telecommunication revolution. It includes King's College London, University Carlos III of Madrid, Virginia Tech, and more.</div>
        </div>
        <div class="flex flex-col  basis-1/3 items-start py-8">
            <div class="relative flex flex-col items-end w-fit pl-[30px]">
                <count-to
                    ref="countDebate"
                    v-view.once="viewDebateCount"
                    :start-val="0"
                    :end-val="1"
                    :duration="3000"
                    :autoplay="true"
                    class="text-5xl font-medium leading-[30px]"
                 />
                <div class="absolute scale-50 -top-4 -left-2">
                    <svg width="43" height="40" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 40L31 -1.35505e-06L43 -1.87959e-06L12 40L0 40Z" fill="#39E8EA"/>
                    </svg>
                </div>
                <div class="font-medium">TARGET</div>
            </div>
            <div class="ml-[3.36rem] max-w-xs font-normal">The target of the conference is to bring together top R&D and business representatives and discuss the future of telecommunications.</div>
        </div>
    </div>
    
    </div>

</div>
</template>




<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
                viewMinutCount(e) {
            if (e.type == "enter") {
                this.$refs.countMinute.start();
            }
            if (e.type == "exit") {
                this.$refs.countMinute.reset();
            }
        },
        viewPrelegentCount(e) {
            if (e.type == "enter") {
                this.$refs.countPrelegent.start();
            }
            if (e.type == "exit") {
                this.$refs.countPrelegent.reset();
            }
        },
        viewDebateCount(e) {
            if (e.type == "enter") {
                this.$refs.countDebate.start();
            }
            if (e.type == "exit") {
                this.$refs.countDebate.reset();
            }
        },
        }
    }

</script>