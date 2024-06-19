import React from 'react';

const Welcome = () => {
  return (
    <div className='text-justify p-6 bg-white rounded-xl'>
      <section>
        <p>
          <span className='text-lg font-bold'>Welcome to RecipeBook,</span> the
          all-in-one platform designed to ignite your culinary creativity and
          simplify your cooking journey. Whether you&apos;re a seasoned chef, a
          home cook, or just starting your kitchen adventures, RecipeBook offers
          a world of recipes tailored to your tastes and preferences.
        </p>
      </section>
      <section>
        <h2>Discover a World of Recipes</h2>
        <p>
          RecipeBook boasts a vast collection of recipes from all corners of the
          globe. Explore diverse cuisines, from Italian and Indian to Mexican
          and Japanese, and find the perfect dish for any occasion. Our library
          is constantly updated, ensuring you always have access to the latest
          culinary trends and timeless classics.
        </p>
      </section>
      <section>
        <h2>Share Your Culinary Creations</h2>
        <p>
          Have a family recipe that&apos;s been passed down through generations?
          Or maybe you just invented a new dish that you&apos;re excited about?
          RecipeBook allows you to share your recipes with our community. Simply
          upload your recipe, complete with ingredients, instructions, and
          photos, and watch as others try, rate, and comment on your creation.
        </p>
      </section>
      <section>
        <h2>Search and Filter with Ease</h2>
        <p>
          Finding the right recipe has never been easier. RecipeBook&apos;s
          advanced search and filtering options let you narrow down your choices
          based on:
        </p>
        <ul className='flex flex-col gap-2'>
          <li>
            <strong>Dietary Preferences</strong>: Whether you&apos;re vegan,
            vegetarian, gluten-free, or on a keto diet, you can find recipes
            that fit your dietary needs.
          </li>
          <li>
            <strong>Difficulty Level</strong>: From beginner to expert, filter
            recipes based on your skill level.
          </li>
          <li>
            <strong>Cuisine</strong>: Craving something specific? Filter by
            cuisine to find dishes that satisfy your taste buds.
          </li>
          <li>
            <strong>Top Ranked</strong>: Discover the highest-rated recipes as
            voted by our community.
          </li>
          <li>
            <strong>Spiciness</strong>: Control the heat by filtering recipes
            according to spiciness levels, ensuring your meal is just the way
            you like it.
          </li>
        </ul>
      </section>
      <section>
        <h2>Personalized Experience</h2>
        <p>
          RecipeBook offers a personalized experience tailored to your
          preferences. Save your favorite recipes, create custom recipe
          collections, and receive recommendations based on your tastes and
          cooking history.
        </p>
      </section>
      <section>
        <h2>Community and Collaboration</h2>
        <p>
          Join a thriving community of food enthusiasts. Engage with other users
          by rating recipes, leaving comments, and sharing cooking tips.
          Collaborate on meal planning and exchange ideas to elevate your
          cooking skills.
        </p>
      </section>
      <section>
        <h2>Get Started Today</h2>
        <p>
          Embark on your culinary journey with RecipeBook today. Whether
          you&apos;re looking to try something new or perfect your signature
          dish, RecipeBook is here to inspire, guide, and support you every step
          of the way.
        </p>
        <p>Happy cooking!</p>
      </section>
    </div>
  );
};

export default Welcome;
