export type Entries<T> = {
	[key in keyof T]: string;
};

export class FormController<T> {
	entries: Entries<T>;
	constructor(entries: Entries<T>) {
		this.entries = entries;
	}

	get(key: keyof Entries<T>) {
		return this.entries[key];
	}
	set(k: keyof Entries<T>, v: string) {
		this.entries[k] = v;
		return this;
	}
	clone() {
		return new FormController({ ...this.entries });
	}
}
