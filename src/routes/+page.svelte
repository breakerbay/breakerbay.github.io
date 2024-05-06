<script>
    let name = 'World';
</script>
<main class="centered">

    <form class="form-group">
        <label for="name">And you are? </label>
        <input type="text" name="name" id="name" bind:value={name}/>
    </form>

    <h1>Hello, {name}!</h1>

</main>

<style>
    .centered {
        width: 25rem;
        margin: 0 auto;
        /*background-color: #f0f0f0;*/
        background-color: #03fcd3;
        padding: 1rem;
    }

    .form-group {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }

    .form-group label {
        flex: 1; /*Let the label take up as much room as possible*/
        margin-right: 1rem; /*Add space between lable and input*/
        font-size: 2em; /* Set the font size to match h1 */
        font-weight: bold;
    }

    .form-group input[type="text"] {
        height: 2em; /* Set the height to match the label's font size */
		padding-left: 0.5rem;
		font-weight: bold;
		background-color: #fc510d;
    }
</style>

