<template>
    <div class="w-full overflow-hidden text-[#002738]">
        <div class="container ">
            <div class="relative mr-96">
                <div class="absolute top-0 left-full h-full w-[850px]" style="background-image: url(/img/topics.png)"></div>
                <!-- Topics svg -->
                <div class="py-16 pl-20 pr-32 relative flex flex-col bg-[#F7F9F9]">
                    <div class="flex">
                        <div class="flex items-center space-x-2 ml">
                            <div class="scale-50">
                                <svg width="43" height="40" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 40L31 -1.35505e-06L43 -1.87959e-06L12 40L0 40Z" fill="#39E8EA"/>
                                </svg>
                            </div>
                         </div>
                        <div class="text-[25px] font-semibold uppercase">topics covered</div> 
                    </div>
                    <!--Pojedyncza linijka tematow ! Do zamiany na komponent -->
                        <div class="flex justify-between items-center mt-12 pb-4 border-b border-b-[#F3F3F3]">
                            <div class="flex justify-start items-center space-x-10">
                                <div class="text-2xl text-[#F7F9F9] font-bold strokeme ml-2">01</div>
                                <div class="text-[#002738] font-semibold">Wireless network management </div>
                            </div>
                            <div class="relative w-4 h-4 shrink-0 grow-0">
                                <span class="absolute top-[6px]">
                                    <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="14" height="2" fill="#39E8EA"/>
                                    </svg>
                                </span>
                                <span class="absolute left-[6px] ">
                                    <svg width="2" height="14" viewBox="0 0 2 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2" width="14" height="2" transform="rotate(90 2 0)" fill="#39E8EA"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <!--  -->
                        
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{

        }
    }
}


</script>

<style scoped lang="postcss">
>>> .strokeme {
  -webkit-text-stroke: 2px #002738;
}
</style>