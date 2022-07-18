<script setup>
    import "../assets/style.scss";
</script>

<template>
    <header className="header">
        <img
            alt="Blog logo"
            src="@/assets/logo.svg"
            width="80"
            height="80"
        />

        <div className="socials">
            <nav>
                <RouterLink to="/" style="textDecoration:none">
                    <img
                        alt="Twitter logo"
                        src="@/assets/twitter.svg"
                        className="socials-item"
                        width="20"
                        height="16.03"
                    />
                    <span className="span">.</span>
                </RouterLink>
                <RouterLink to="/" style="textDecoration:none">
                    <img
                        alt="Dribble logo"
                        src="@/assets/dribbble.svg"
                        className="socials-item"
                        width="20"
                        height="20"
                    />
                     <span className="span">.</span>
                </RouterLink>
                <RouterLink to="/" style="textDecoration:none">
                    <img
                        alt="Figma logo"
                        src="@/assets/figma.svg"
                        className="socials-item"
                        width="20"
                        height="20"
                    />
                    <span className="span">.</span>
                </RouterLink>
                <RouterLink to="/">
                    <img
                        alt="Github logo"
                        src="@/assets/github.svg"
                        className="socials-item"
                        width="20"
                        height="20"
                    />
                    
                </RouterLink>
            </nav>
        </div>
    </header>
</template>