package guru.jhipster.tasks.services;

import guru.jhipster.tasks.domain.Task;

public interface TaskService {

    Iterable<Task> list();

    Task save(Task task);
}
