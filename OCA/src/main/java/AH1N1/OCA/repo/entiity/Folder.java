package AH1N1.OCA.repo.entiity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "FOLDER")
public class Folder {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    @NotNull
    private String name;

    @Column(name = "notes")
    @OneToMany(/*mappedBy = "parentFolder",*/ fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "parent_folder")
    private Set<Note> notes;

    public Folder addNote(Note note) {
        if (Objects.isNull(notes)) notes = new HashSet<>();
        notes.add(note);
        return this;
    }
}
