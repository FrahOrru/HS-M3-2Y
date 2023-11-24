<template>
    <div class="header">
        <LanguageChange></LanguageChange>
        <!-- <ModeSwitch></ModeSwitch> -->
        <h1>Francesca Orrù - {{ $t('finalPrj') }}</h1>
        <div></div>
    </div>
</template>
<style scoped>
    .header {
        height: 8vh;
        border-bottom: 1px solid rgba(150, 150, 150, 0.40);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>