import Component from "@glimmer/component";
import { action } from "@ember/object";
import TweenMax from 'gsap'

export default class MoveMe extends Component {
	@action
	moveMe() {
    TweenMax.to("#test-move", {duration: 1, x: 100});
	}
}
