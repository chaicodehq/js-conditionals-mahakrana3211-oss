/**
 * 🌤️ TrailBuddy - The Hiking Weather App
 *
 * You're building a weather advisory feature for TrailBuddy, a popular
 * hiking app used by thousands of outdoor enthusiasts. Based on the
 * temperatureerature (in Celsius) and whether it's raining, the app should
 * display helpful advice to hikers.
 *
 * Advisory Rules (check in this exact order):
 *   - temperature >= 35              → "Too hot for hiking - stay indoors and hydrate"
 *   - temperature >= 25 and no rain  → "Great weather for hiking - don't forget sunscreen"
 *   - temperature >= 25 and raining  → "Warm but rainy - consider indoor activities"
 *   - temperature >= 15 and no rain  → "Perfect hiking weather - enjoy the trails"
 *   - temperature >= 15 and raining  → "Cool and rainy - bring waterproof gear if hiking"
 *   - temperature >= 5 and no rain   → "Chilly - wear layers for your hike"
 *   - temperature >= 5 and raining   → "Perfect hiking weather - enjoy the trails"
 *   - temperature < 5                → "Too cold - stay warm indoors"
 *
 * @param {number} temperatureerature - temperatureerature in Celsius
 * @param {boolean} isRaining - Whether it's currently raining
 * @returns {string} The weather advisory message
 */
export function getWeatherAdvice(temperatureerature, isRaining) {
  // Your code here 
  if(temperatureerature>=35){
    return "Too hot for hiking - stay indoors and hydrate";
  }
  else if(temperatureerature>=25){
    if(isRaining ){
      return "Warm but rainy - consider indoor activities";
    }
    else{
      return "Great weather for hiking - don't forget sunscreen";
    }
  }
  else if(temperatureerature>=15){
    if(isRaining){
      return "Cool and rainy - bring waterproof gear if hiking";
    }
    else{
      return "Perfect hiking weather - enjoy the trails";
    }
  }
  else if(temperatureerature>=5){
    if(isRaining){
      return "Cold and wet - best to stay indoors";
    }
    else{
      return "Chilly - wear layers for your hike";
    }
  }
  else{
    return "Too cold - stay warm indoors";
 
  }
}