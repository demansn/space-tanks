import EventEmmiter from './EventEmmiter';

class GameObject extends EventEmmiter
{
	constructor(ID)
	{
		super();
		this._id = ID;
		this._components = {};
	}
	get ID()
	{
		return this._id;
	}
	addComponent(component)
	{
		if (!this._components[component.name])
		{
			this._components[component.name] = component;
		}
		else
		{
			throw new Error(`Такой компонент уже существует - ${component.name}`);
		}
	}
	removeComponent(component)
	{
		if (this._components[component.name])
		{
			this._components[component.name] = null;
			delete this._components[component.name];
		}
	}
}

export default GameObject;
