package guru.jhipster.tasks;

import guru.jhipster.tasks.domain.Task;
import guru.jhipster.tasks.services.TaskService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@SpringBootApplication
public class TasksApplication {

//			+~~~~~~+~~~~~~+~~~~~~~~~~~+
//			|  fg  |  bg  |  color    |
//			+~~~~~~+~~~~~~+~~~~~~~~~~~+
//			|  30  |  40  |  black    |
//			|  31  |  41  |  red      |
//			|  32  |  42  |  green    |
//			|  33  |  43  |  yellow   |
//			|  34  |  44  |  blue     |
//			|  35  |  45  |  magenta  |
//			|  36  |  46  |  cyan     |
//			|  37  |  47  |  white    |
//			|  39  |  49  |  default  |
//			+~~~~~~+~~~~~~+~~~~~~~~~~~+

	final static String FG_BLACK = (char)27 + "[30m";
	final static String FG_RED = (char)27 + "[31m";
	final static String FG_GREEN = (char)27 + "[32m";
	final static String FG_YELLOW = (char)27 + "[33m";
	final static String FG_BLUE = (char)27 + "[34m";
	final static String FG_MAGENTA = (char)27 + "[35m";
	final static String FG_CYAN = (char)27 + "[36m";
	final static String FG_WHITE = (char)27 + "[37m";
	final static String FG_DEFAULT = (char)27 + "[39m";

	final static String BG_BLACK = (char)27 + "[40m";
	final static String BG_RED = (char)27 + "[41m";
	final static String BG_GREEN = (char)27 + "[42m";
	final static String BG_YELLOW = (char)27 + "[43m";
	final static String BG_BLUE = (char)27 + "[44m";
	final static String BG_MAGENTA = (char)27 + "[45m";
	final static String BG_CYAN = (char)27 + "[46m";
	final static String BG_WHITE = (char)27 + "[47m";
	final static String BG_DEFAULT = (char)27 + "[49m";

	public static void main(String[] args) {
		SpringApplication.run(TasksApplication.class, args);

		System.out.println( BG_YELLOW + FG_BLUE + "ERROR MESSAGE IN RED");
	}

	@Bean
	CommandLineRunner runner(TaskService taskService) {
		return args -> {
			taskService.save(new Task(1L, "Create Spring Boot Application", LocalDate.now(), true));
			taskService.save(new Task(2L, "Create Spring Project Packages", LocalDate.now().plus(1, ChronoUnit.DAYS), false));
			taskService.save(new Task(3L, "Create the Task Domain Class", LocalDate.now().plus(3, ChronoUnit.DAYS), false));
			taskService.save(new Task(4L, "Create service and repository classes", LocalDate.now().plus(5, ChronoUnit.DAYS), false));
			taskService.save(new Task(5L, "Create the command line runner to load data", LocalDate.now().plus(8, ChronoUnit.DAYS), false));
			taskService.save(new Task(6L, "Create the required configuration properties", LocalDate.now().plus(10, ChronoUnit.DAYS), false));
			taskService.save(new Task(7L, "Run the Spring Boot Application", LocalDate.now().plus(12, ChronoUnit.DAYS), false));
			taskService.save(new Task(8L, "Check the H2 Console for the initial data", LocalDate.now().plus(13, ChronoUnit.DAYS), false));
		};
	}
}
